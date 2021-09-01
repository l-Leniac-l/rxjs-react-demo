import { interval, switchMap } from "rxjs";

import { request } from "./request";

function makeApiRequest(lado) {
  return request(`Aviaozinho?where={"lado":"${lado}"}`, {
    method: "GET",
  }).then((response) => response.json());
}

export const esquerdo$ = interval(10_000).pipe(
  switchMap(() => makeApiRequest("esquerdo"))
);

export const direito$ = interval(10_000).pipe(
  switchMap(() => makeApiRequest("direito"))
);
