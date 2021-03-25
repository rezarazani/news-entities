export const dbNames = <const> [
    'onro_db',
    'pickup_db',
    'acistant_db',
    'asankar_db',
    'onroir_db',
    'onro_non_branded_db'
];

export type Project = {
    dbName: typeof dbNames[number],
    projectName: string,
    deployment: 'on-premise' | 'cloud',
    type: 'branded' | 'non-branded' | 'non-branded-parent',
    parent: string | null,
    projectHash: string
}

export const Projects: {
    [key in string]: Project
} = {
    '06e6cbc055a958e5ecd00af1a6d49484a72c56d1': {
        dbName: 'pickup_db',
        projectName: 'pickup',
        deployment: 'cloud',
        type: 'branded',
        parent: null,
        projectHash: '06e6cbc055a958e5ecd00af1a6d49484a72c56d1'
    },
    'Uo3CjH85YUJlji9zZdTE2QoaUoyht6cI': {
        dbName: 'acistant_db',
        projectName: 'acistant',
        deployment: 'on-premise',
        type: 'branded',
        parent: null,
        projectHash: 'Uo3CjH85YUJlji9zZdTE2QoaUoyht6cI'
    },
    'UbhsBfBbjc8uR52qi8QwK06S1c8r9DEG': {
        dbName: 'asankar_db',
        projectName: 'asankar',
        deployment: 'cloud',
        type: 'branded',
        parent: null,
        projectHash: 'UbhsBfBbjc8uR52qi8QwK06S1c8r9DEG'
    },
    'NkwN53jk05zyv6bqbRPpKlbrnJCg5TSX': {
        dbName: 'onroir_db',
        projectName: 'onroir',
        deployment: 'cloud',
        type: 'branded',
        parent: null,
        projectHash: 'NkwN53jk05zyv6bqbRPpKlbrnJCg5TSX'
    },
    'xfjGftqcqk1WKgP7jKXnLqrvNfg1yGdp': {
        dbName: 'onro_non_branded_db',
        projectName: 'onro',
        deployment: 'cloud',
        type: 'non-branded-parent',
        parent: null,
        projectHash: 'xfjGftqcqk1WKgP7jKXnLqrvNfg1yGdp'
    },
    '1f3869733fab0ffce35d2b4b22f871ad': {
        dbName: 'onro_db',
        projectName: 'onro',
        deployment: 'cloud',
        type: 'non-branded',
        parent: 'xfjGftqcqk1WKgP7jKXnLqrvNfg1yGdp',
        projectHash: '1f3869733fab0ffce35d2b4b22f871ad'
    },
}