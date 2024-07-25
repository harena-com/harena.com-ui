export type MutationType = "CREATE" | "UPDATE";

export type HarenaDataProviderType<T> = {
  /**
   * Retrieves a paginated list of resources with optional filtering.
   * @param page Number of the requested page
   * @param pageSize Number of items per page
   * @param meta Some metadata params (optional)
   * @returns Promise containing an array of resources
   */
  getList: (page: number, pageSize: number, meta: any) => Promise<T[]>;

  /**
   * Retrieves a single resource based on its patrimony and possession name.
   * @param name Name of the patrimony / possession known as a type of identification
   * @param meta Metadata parameters (optional)
   * @returns Promise containing the found resource
   */
  getOne: (id: string, meta: any) => Promise<T>;

  /**
   * Saves or updates an existing resource.
   * @param resources The resource to save or update (optional)
   * @param meta Metadata parameters (optional)
   * @returns Promise indicating the success of the operation
   */
  saveOrUpdate: (
    resource: T,
    meta: {mutationType: MutationType; [T: string]: any}
  ) => Promise<T>;

  /**
   * Deletes a resource based on its patrimony and possession name.
   * @param name Name of the patrimony / possession known as a type of identification
   * @returns Promise indicating the success of the operation
   */
  delete: (id: string, meta: any) => Promise<T>;
};
