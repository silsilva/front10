import { updateProfileInformation } from "@/lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useGetUserProfileInformation } from "@/lib/hooks";
import { Container } from "./styled";

export function ProfileForm() {
  const form: any = useRef();
  const userData = useGetUserProfileInformation();
  const router = useRouter();

  useEffect(() => {
    const formEl = form.current;
    formEl.name.value = userData?.name || "";
    formEl.address.value = userData?.address || "";
    formEl.phone.value = userData?.phoneNumber || "";
  }, [userData]);

  async function updates(e: any) {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const address = target.address.value;
    const phoneNumber = target.phone.value;
    console.log(name);

    await updateProfileInformation(name, address, phoneNumber);
    router.reload();
  }

  return (
    <Container style={{ padding: "90px 0" }} ref={form} onSubmit={updates}>
      <input
        style={{
          marginBottom: "15px",
        }}
        type="text"
        name="name"
        placeholder="Nombre"
        required
      />
      <input
        style={{
          marginBottom: "15px",
        }}
        type="text"
        name="address"
        placeholder="Dirección"
        required
      />
      <input
        style={{
          marginBottom: "15px",
        }}
        type="number"
        name="phone"
        placeholder="Teléfono"
        required
      />
      <button
        style={{
          width: "200px",
          height: "25px",
          background: "#36393c",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
          WebkitBoxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
          MozBoxShadow: "0 2px 4px rgba(0, 0, 0, .2)",
        }}
      >
        Guardar
      </button>
    </Container>
  );
}
