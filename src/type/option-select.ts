import { type ComponentPropsWithRef } from "react";

export interface OptionDinamic<T> extends ComponentPropsWithRef<'select'> {
 data: T[];
 valueKey: keyof T;
 labelKey: keyof T;
 labelInitialOption?:string;
}