import React from 'react';
import { SkeletonStyled } from './styled';

/**
 * @export
 * @component
 * @name LoadingTable
 *
 * @description
 * Responsável por controlar o loading da tabela.
 */
export const LoadingTable = () => (
  <>
    <SkeletonStyled />
    <SkeletonStyled />
    <SkeletonStyled />
  </>
);
