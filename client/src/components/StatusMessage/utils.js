export function setDisplayStatus(status) {
    switch (status) {
        case 'active':
            return {
                border: `4px solid #799C8A`,
                color: `#799C8A`
            }
        case 'warning':
            return {
                border: `4px solid #F4B860`,
                color: `#F4B860`
            }
        case 'error':
            return {
                border: `4px solid #EA7C7C`,
                color: `#EA7C7C`
            }
        default: 
            return {
                border: `4px solid gray`,
                color: `gray`
            }
    }
}