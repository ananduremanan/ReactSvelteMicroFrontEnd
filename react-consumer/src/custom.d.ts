declare global {
  interface Window {
    header: {
      get: (moduleName: string) => Promise<any>;
    };
    addToCart: () => void;
  }
}

export {};
