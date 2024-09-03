import useSWRImmutable from "swr/immutable";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//const BASE_URL = "http://localhost:3001/api";
const BASE_URL = "https://back09.vercel.app/api";

export async function api(input: RequestInfo, options?: any) {
  const url = BASE_URL + input;

  const newOptions = options || {};

  newOptions.headers ||= {};

  newOptions.headers["content-type"] = "application/json";
  const token = getSavedToken();

  if (token) {
    newOptions.headers.authorization = `Bearer ${token}`;
  }

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);
  const data = await res.json();

  if (res.status >= 200 && res.status < 300) {
    return data;
  } else {
    throw {
      ...data,
      status: res.status,
    };
  }
}

export async function sendVerificationEmail(email: string) {
  const res = await api("/auth", { method: "post", body: { email } });

  return res;
}

function saveUserInformation(token: string, email: string) {
  localStorage.setItem("user_information", JSON.stringify({ token, email }));
}

export async function getAccessToken(email: string, code: number) {
  try {
    const res = await api("/auth/token", {
      method: "post",
      body: { email, code },
    });
    saveUserInformation(res.token, email);
    console.log(res.token, "TOKEN API");
    console.log(res, "RES API");
    return res;
  } catch (err) {
    return err;
  }
}

function getSavedToken() {
  if (typeof window !== "undefined" && window.localStorage) {
    const userInformation: any = localStorage.getItem("user_information");
    if (userInformation) {
      const parsedUserInformation = JSON.parse(userInformation);
      return parsedUserInformation.token;
    }
  } else {
    return null;
  }
}

export async function getProductListgetProductList() {
  const data = await api("/search?limit=3&offset=10");

  return data;
}

export async function getProductDetails(productId: string) {
  const data = await api(`/products/${productId}`);
  return data;
}

export async function placeOrder(productId: string) {
  const data = await api(`/order?productId=${productId}`, {
    method: "post",
    body: { qty: 1 },
  });

  return data;
}

export async function updateProfileInformation(
  name: string,
  address: string,
  phoneNumber: string
) {
  const data = await api("/me", {
    method: "PATCH",
    body: { name, address, phoneNumber },
  });

  return data;
}
export function useSearch() {
  const router = useRouter();
  const product = router.query.q;
  const limit = router.query.limit ?? 3;
  const offset = router.query.offset ?? 0;

  const { data, mutate, isLoading } = useSWRImmutable(
    `/search?q=${product}&limit=${limit}&offset=${offset}`,
    api,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
    }
  );

  useEffect(() => {
    mutate(`/search?q=${product}&limit=${limit}&offset=${offset}`);
  }, [router.query]);

  return { data, isLoading };
}

export function useGetStorageData(key: string) {
  const [data, setData] = useState("");

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  return data;
}

export function useIsAuthenticated() {
  const userInformation = useGetStorageData("user_information");

  return userInformation;
}

export function useLogout() {
  const [logOut, setLogOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (logOut) {
      setLogOut(false);
      localStorage.removeItem("user_information");

      if (router.pathname !== "/") {
        router.push("/");
      } else {
        router.reload();
      }
    }
  }, [logOut]);

  return setLogOut;
}

export function useToggleSearchBar() {
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/signin" && pathname !== "/profile") {
      setSearchBarStatus(true);
    }
  }, [pathname]);

  function updateSearchBarStatus(newStatus: boolean) {
    if (pathname !== "/" && pathname !== "/signin" && pathname !== "/profile") {
      setSearchBarStatus(newStatus);
    }
  }

  return { searchBarStatus, updateSearchBarStatus };
}

export function useLoadingIndicator() {
  const [loader, setLoader] = useState(false);

  function showLoader() {
    setLoader(true);
  }

  function hideLoader() {
    setLoader(false);
  }

  return {
    loader,
    showLoader,
    hideLoader,
  };
}

export function useGetUserProfileInformation() {
  const { data } = useSWRImmutable("/me", api, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

  return data;
}
