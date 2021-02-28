import React from 'react'

export function TitleShowAgents({record}) {
  return (
    <div>
      Détail Agent: <strong>{record.nom} {record.prenom}</strong>
    </div>
  )
}

export function TitleEditAgents({record}) {
  return (
    <div>
      Modifier Agent: <strong>{record.nom} {record.prenom}</strong>
    </div>
  )
}
