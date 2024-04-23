'use client'

import React from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '40%'
  }
}

interface Props {
  modalIsOpen: boolean
  closeModal: () => void
  contentLabel?: string
  styles?: ReactModal.Styles
  children: React.ReactNode
}

export default function Modal (props: Props): React.JSX.Element {
  const {
    modalIsOpen,
    closeModal,
    contentLabel,
    styles = {},
    children
  } = props

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{ ...customStyles, ...styles }}
      contentLabel={contentLabel}
    >
      {children}
    </ReactModal>
  )
}
