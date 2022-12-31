export function createVisitor(name, age, ticketId) {
    let NewVisitor = {
        'name' : name,
        'age' : age,
        'ticketId' : ticketId
    };
    return NewVisitor;
}
export function revokeTicket(visitor) {
    delete visitor['ticketId'];
    visitor['ticketId'] = null;
    return visitor;
}

export function ticketStatus(tickets, ticketId) {
    if(tickets[ticketId] === undefined){
        return 'unknown ticket id';
    }
    else if(tickets[ticketId] === null){
        return 'not sold';
    }
    else{
        return "sold to "+tickets[ticketId];
    }
}

export function simpleTicketStatus(tickets, ticketId) {
    if(tickets[ticketId] === null || tickets[ticketId] === undefined){
        return 'invalid ticket !!!';
    }
    else{
        return tickets[ticketId];
    }
}

export function gtcVersion(visitor) {
    if(visitor.gtc){
        return visitor.gtc.version;
    }
    else{
        return undefined;
    }
}