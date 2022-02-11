export type MediaContentType =
  | { uri: string; type: 'uri'; mimeType: string }
  | { text: string; type: 'text'; mimeType: string };

export interface GenericMediaInterface {
  fetchMetadata(uri: string): Promise<any>;
  fetchContent(url: string, contentType: string): Promise<MediaContentType>;
  fetchContentMimeType(url: string): Promise<string>;
}
