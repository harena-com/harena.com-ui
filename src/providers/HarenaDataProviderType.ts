export type HarenaDataProviderType = {
  /**
   * Retrieves a paginated list of resources with optional filtering.
   * @param page Number of the requested page
   * @param pageSize Number of items per page
   * @param possessionName Name of the possession (optional)
   * @param patrimonyName Name of the patrimony (optional)
   * @returns Promise containing an array of resources
   */
  getList: (
    page: number,
    pageSize: number,
    possessionName?: string,
    patrimonyName?: string
  ) => Promise<unknown>;

  /**
   * Retrieves a single resource based on its patrimony and possession name.
   * @param patrimonyName Name of the patrimony
   * @param possessionName Name of the possession
   * @returns Promise containing the found resource
   */
  getOne: (patrimonyName: string, possessionName: string) => Promise<unknown>;

  /**
   * Saves or updates an existing resource.
   * @param resources The resource to save or update (optional)
   * @returns Promise indicating the success of the operation
   */
  saveOrUpdate: (
    patrimonyName?: string,
    resources?: unknown
  ) => Promise<unknown>;

  /**
   * Deletes a resource based on its patrimony and possession name.
   * @param patrimonyName Name of the patrimony
   * @param possessionName Name of the possession
   * @returns Promise indicating the success of the operation
   */
  delete: (patrimonyName: string, possessionName: string) => Promise<unknown>;
};
