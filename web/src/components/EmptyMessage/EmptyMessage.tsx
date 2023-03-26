import React from 'react';

type Props = {
  message: string;
  error?: boolean;
};

export const EmptyMessage = ({ message, error }: Props) => (
  <>
    {error ? (
      <div className="has-background-danger-light has-text-danger is-flex is-align-items-center is-justify-content-center p-5 has-text-weight-bold">
        {error && <i className="fa-light fa-circle-exclamation pr-2" />}{' '}
        {message}
      </div>
    ) : (
      <div className="has-background-grey-lighter has-text-grey-dark is-flex is-align-items-center is-justify-content-center p-5 has-text-weight-bold">
        {error && <i className="fa-light fa-circle-exclamation pr-2" />}{' '}
        {message}
      </div>
    )}
  </>
);
