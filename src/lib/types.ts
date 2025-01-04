import type { WatchEventType, Stats } from 'node:fs';
import type { Watcher } from './watcher.js';

export interface WatcherConfig {
  /**
   * event source type, default is `default`
   * can be `default` or `development`
   */
  type: string;
  /**
   * event sources
   * key is event source type, value is event source module path
   */
  eventSources: Record<string, string>;
}

export interface ChangeInfo extends Record<string, any> {
  event: WatchEventType;
  /**
   * file stat if path exists
   */
  stat?: Stats;
  path: string;
}

declare module '@eggjs/core' {
  interface EggCore {
    watcher: Watcher;
  }

  interface EggAppConfig {
    watcher: WatcherConfig;
  }
}
