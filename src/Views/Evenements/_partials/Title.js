import React from 'react'

export function TitleShowUsers({record}) {
  return (
    <div>
      Détail Compte <strong>{record.username}</strong>
    </div>
  )
}

export function TitleEditUsers({record}) {
  return (
    <div>
      Modifier Compte <strong>{record.username}</strong>
    </div>
  )
}
