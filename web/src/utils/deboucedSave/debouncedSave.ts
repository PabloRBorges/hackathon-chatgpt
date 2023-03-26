import debounce from 'lodash.debounce';

type Props = {
  filterValue: Array<any>;
  setValue: (filterValue: Array<any>) => void;
  setIsLoading: (isLoading: boolean) => void;
};

/**
 * @export
 * @function
 * @name deboucedSave
 *
 * @description
 * Responsável por fazer o debounce da chamada.
 */
export const debouncedSave = ({
  filterValue,
  setValue,
  setIsLoading,
}: Props) => {
  setIsLoading(true);
  const callDebounce = debounce(() => setValue(filterValue), 1000);
  callDebounce();
  setIsLoading(false);
};
