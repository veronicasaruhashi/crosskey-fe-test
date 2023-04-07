export interface APIResponse<T> {
  status: APIResponseStatus;
  data: T[];
}

export interface APIResponseStatus {
  success: boolean;
  errors: any[]; // TODO set type
  infos: any[]; // TODO set type
  jSessionId: string;
}
