export const ADD = 'ADD'
export const SUB = 'SUB'

export function addTo() {
    return {
        type: ADD
    }
}

export function subTo(payload) {
    return {
        type: SUB,
        payload
    }
}
