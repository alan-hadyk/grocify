export interface ComponentEnhancer<TInner, TOuter> {
  (component: React.FC<TInner>): React.FC<TOuter>
}
