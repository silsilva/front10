import { useRouter } from "next/router";
import { getAccessToken, sendVerificationEmail } from "@/lib/hooks";
import { useState } from "react";
import { Container } from "./styled";
export function SignIn() {
  const [email, setEmail] = useState();
  const router = useRouter();

  async function handleSubmit(e: any) {
    console.log("HACE CLICK");

    e.preventDefault();
    const target = e.target;
    if (!email) {
      setEmail(target.email.value);
      await sendVerificationEmail(target.email.value);
    } else {
      const data = await getAccessToken(email, parseInt(target.code.value));
      if (data.token) {
        router.push("/");
      } else {
        alert("ERROR");
      }
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10%",
        paddingBottom: "71vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        {email ? (
          <input type="number" name="code" placeholder="Código" />
        ) : (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(email)}
          />
        )}
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
          CONTINUAR
        </button>
      </form>
    </div>
  );
}
