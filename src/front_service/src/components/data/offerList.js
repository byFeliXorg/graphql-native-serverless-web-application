import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


const OFFER_QUERY = gql`
  {
    allOffres {
        data {
        title
        address {
            ville
        }
        description
        postedBy {
            email
            id_firebase_auth
            _id
        }
        }
    }
  }
`;


export default function OfferList() {
  const { data, loading } = useQuery(OFFER_QUERY);

  if (loading) {
    return <div class="d-flex justify-content-center">
                <div class="spinner-grow text-dark" width="3rem" height="3rem" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
    ;
  }

  return (
      <div class="card-deck">
        {data.allOffres.data.map((item) => {
            
            return (
                    <div class="card " >
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">+212 6 42 68 79 80</li>
                            <li class="list-group-item">lot. Adarissa, Sidi Maarouf, Grand Casablanca</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link text-warning">Response to this offer</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Posted by {item. postedBy.email}</small>
                        </div>
                    </div>
            );
        })}
    </div>
  );
}