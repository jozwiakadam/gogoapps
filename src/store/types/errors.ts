export interface API<T extends Record<string, any> | undefined = undefined> {
    code: number | null;
    errors?: APIErrors<T>;
    message?: string | null;
}

type APIErrors<T> = T extends undefined
    ? undefined
    : {
          [P in keyof T]?: T[P] extends object ? APIErrors<T[P]> : string | null | undefined;
      };
