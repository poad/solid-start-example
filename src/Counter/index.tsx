import { clientOnly } from "@solidjs/start";
import { Show, Suspense } from "solid-js";
const Original = clientOnly(() => import("./components"));

export default function Counter() {
  return (<Show when={window && Original}>
    <Suspense fallback={<div>Loading...</div>}>
      <Original />
    </Suspense>
  </Show>);
};
