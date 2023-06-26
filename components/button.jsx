import React from 'react';
import Link from '@docusaurus/Link';

export default function ButtonDefault({children, color}) {
  return (
    <div >  
      <div>
           <Link
            className="button button--secondary button--lg"
            to="https://www.postman.com/sevi-api">
            Postman
          </Link>
          </div>
          <div style={{ marginTop:20, marginBottom:20}}>
          <Link
            className="button button--secondary button--lg"
            to="https://partner.sevi.io/graphql">
            Graphql
          </Link>
      </div>
         
    </div>
  );
}