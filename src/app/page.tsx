import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser";
import { DialogProvider } from "./context/DialogContext";

export default async function Home() {
  return (
    <DialogProvider>
      <Suspense fallback={<p>carregando...</p>}>
        <GithubUser username="lopsbea" />
      </Suspense>
      <Suspense fallback={<p>carregando...</p>}>
        <GithubUser username="diego3g" />
      </Suspense>
    </DialogProvider>
  );
}
