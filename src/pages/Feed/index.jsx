import React, { useEffect, useState } from 'react';
import { api } from '../../service/api'
import { BurgersSection } from '../../components/BurgersSection';
import { Loading } from '../../components/Loading/index'
import { Header } from '../../components/Header';
import { ProductNotFound } from '../../components/ProductNotFound';

export const Feed = ({ purchaseList, setPurchaseList, setModalOpen }) => {
  const [burgers, setBurgers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isProductAvailable, setIsProductAvailable] = useState(true);

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await api.get('/products', {
          params: {
            q: search,

          },
        });
        setBurgers(response.data);

        if (response.data.length === 0) {
          setIsProductAvailable(false);
        } else {
          setIsProductAvailable(true);
          setBurgers(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isLoading) {
          setIsLoading(false);
        }
      }
    };

    getTracks();
  }, [search]);



  const handleForm = (inputSearch) => {
    setSearch(inputSearch)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header
        callback={handleForm}
        purchaseList={purchaseList}
        setPurchaseList={setPurchaseList}
        setModalOpen={setModalOpen} />
      {isProductAvailable ? (
        <BurgersSection
          burgers={burgers}
          setPurchaseList={setPurchaseList}
          purchaseList={purchaseList}
        />
      ) : (
        <ProductNotFound />
      )}
    </>
  );
};
