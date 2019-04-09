declare module 'react-native-ui-kitten' {
  import { Component } from 'react';

  export class RkAvoidKeyboard<P = {}, S = {}> extends React.Component<P, S> {}

  export class RkButton<P = {}, S = {}> extends React.Component<P, S> {}

  export class RkCard<P = {}, S = {}> extends React.Component<P, S> {}

  export class RkComponent<P = {}, S = {}> extends React.Component<P, S> {
    rkType: string;
    defineStyles(additionalTypes?: any): any;
    extractNonStyleValue(style: any, property?: string): any;
  }

  export class RkModalImg<P, S> extends React.Component<P, S> {}

  export class RkPicker<P, S> extends React.Component<P, S> {}

  export class RkStyleSheet {
    static create(style: any): any;
  }

  export class RkText<P, S> extends React.Component<P, S> {}

  export class RkTextInput<P, S> extends React.Component<P, S> {}

  export class RkTheme {
    static current: any;
    static registerComponent(element: any, types: any): any;
    static setTheme(theme: any): any;
    static setType(element: any, name: string, value: any, parentTypes?: any): any;
  }

  export function withRkTheme(view: any): React.Component;
}
