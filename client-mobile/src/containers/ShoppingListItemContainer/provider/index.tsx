import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react"

const ModalContext = createContext({ isModalOpen: false, setIsModalOpen: () => {} } as {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
})

export const useModalContext = () => useContext(ModalContext)

export const AddGroceryItemModalProvider = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}
