
import uuid from uuid;


const ADD_COMMENT = 'ADD_COMMENT';

{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));

boundAddComment('kolejny komentarz!');


const EDIT_COMMENT = 'EDIT_COMMENT';

{
    type: EDIT_COMMENT,
    id: 18,
    text: 'Edytion'
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}


const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
    type: THUMB_UP_COMMENT,
    text: 'fa fa-thumbs-o-up'
}

function thumbUp(text) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: uuid.v4()
    }
}


const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: THUMB_DOWN_COMMENT,
    text: 'fa fa-thumbs-o-down'
}

function thumbDown(text) {
    return {
        type: THUMB_DOWN_COMMENT,
        text,
        id: uuid.v4()
    }
}
