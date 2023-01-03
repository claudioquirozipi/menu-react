import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./style.module.css";
import { supabase } from "../../../App";

import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";

export default function LoginPage() {
  const [value, setValue] = useState("");
  const emailRedirectTo = import.meta.env.VITE_REDIRECT;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({
      email: value,
      options: {
        emailRedirectTo,
      },
    });
    if (error) console.error("Error, ", error);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Fieldset legend="Login">
        <div className={styles.fieldset}>
          <span className="p-float-label">
            <InputText
              id="emeal"
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
              type="email"
            />
            <label htmlFor="emeal">Email</label>
          </span>
          <Button className={styles.button} label="Login" />
        </div>
      </Fieldset>
    </form>
  );
}
