export interface IBusqueda<T, N> {
  busquedaPorMarca(filtro: T): Promise<N[]>;
  busqueda(): Promise<N[]>;
}
