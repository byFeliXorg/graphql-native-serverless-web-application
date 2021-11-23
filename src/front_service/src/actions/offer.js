import { FETCH_OFFERS } from './types';
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

export const fetchOffers = () => dispatch => {

    const { data } = useQuery(OFFER_QUERY)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_OFFERS,
          payload: data.allOffres
        })
      );
  };