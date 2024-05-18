import React from 'react';
import '../styles/account-overview.css';
import SupportContact from './support-contact';
import SalesOverview from './sales-overview';

export const AccountOverview = ({data}) => {
  return (
    <div className="AccountOverview">
      <SupportContact contact={data.supportContact} />
      <SalesOverview sale={data.salesOverview} />
    </div>
  )
}

export default AccountOverview;