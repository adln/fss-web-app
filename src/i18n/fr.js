import frenchMessages from 'ra-language-french';

const customFrenchMessages = {
	...frenchMessages,
	resources: {
		evenements: {
			name: 'Evénement |||| Evénements',
			filters: {
				sites: 'Sites',
        agents: 'Agents',
        flag: 'Avec Drapeau'
			}
		},
		sites: {
			name: 'Site |||| Sites',
			filters: {
				sites: 'Sites'
			}
		},
		agents: {
			name: 'Agent |||| Agents',
			filters: {
				sites: 'Sites'
			},
			
		},
		vacations: {
			name: 'Vacation |||| Vacations',
			filters: {
				sites: 'Sites'
			},
			
		},
    users: {
      name: 'Utilisateur |||| Utilisateurs',
      filters: {
        sites: 'Sites'
      }
    }
	}
};

export default customFrenchMessages;
