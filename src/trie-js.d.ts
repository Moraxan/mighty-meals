declare module 'trie-js' {
    export default class Trie {
      insert(word: string): void;
      contains(word: string): boolean;
      find(prefix: string): string[];
      remove(word: string): void;
      size(): number;
    }
  }
  