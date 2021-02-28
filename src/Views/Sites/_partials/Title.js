import React from 'react'

export function TitleShowSites({record}) {
  return (
    <div>
      Détail du Site: <strong>{record.nom}</strong>
    </div>
  )
}

export function TitleEditSites({record}) {
  return (
    <div>
      Modifier Site: <strong>{record.nom}</strong>
    </div>
  )
}
