import type { Plugin } from 'vue';
declare type SFCWithInstall<T> = T & Plugin;
export declare const Icon: SFCWithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
}>, {
    iconProps: any;
    iconStyle: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Icon;
