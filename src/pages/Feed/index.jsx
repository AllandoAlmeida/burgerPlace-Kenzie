import React, { useEffect, useState } from "react";
import { api } from '../../service/api'
import { BurgersSection } from "../../components/BurgersSection";
import { Loading } from '../../components/Loading/index'
import { Header } from "../../components/Header";

export const Feed = ({purchaseList, setPurchaseList, setModalOpen}) => {
  const [burgers, setBurgers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  console.log('Feed')

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await api.get('/products', {
          params: {
            name_like: search,
           
          }
        })
        setBurgers(response.data);

      } catch (error) {
        console.log(error)
      } finally {
        if (isLoading) {
          setIsLoading(false)
        }
      }
    }
    getTracks()
  }, [search])

  const handleForm = (inputSearch) => {
    setSearch(inputSearch)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header callback={handleForm} purchaseList={purchaseList} setPurchaseList={setPurchaseList} setModalOpen={setModalOpen} />
      <BurgersSection burgers={burgers} setPurchaseList={setPurchaseList} purchaseList={purchaseList}/>
    </>
  );
};
