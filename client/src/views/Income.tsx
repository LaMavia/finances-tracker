import React, { ReactElement, useState } from 'react'
import { ViewExport } from '../Root' 
import { Nav } from '../components/Nav'
import { formatter } from '../helpers/formatter';
import { Subsite } from '../components/Subsite';
import { Balance as B } from '../components/Balance';

export const Income = (): ReactElement => {
  return (
    <Subsite route_string="History > Income" route_title="Income">
      <h1>Hello</h1>
    </Subsite>
  )
}

export default {
  component: Income,
  path: '/income/:id'
} as ViewExport
