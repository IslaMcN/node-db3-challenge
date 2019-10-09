const db = require('../data/seeds/01-schemes')

module.exports = {
    find,
    findByID,
    findSteps,
    add,
    update,
    remove
};

function find(){
    return db('schemes')
}

function findByID(id){
    return db('schemes')
    .where({ id }).first();
}

function findSteps(id){
    return db('scheme as s')
    .join('steps as st', 'st.scheme_id', 's.id')
    .select('s.id', 's.scheme_name', 'st.step_number', 'st.instructions')
    .where({scheme_name: scheme});
}

function add(scheme){
    return db('scheme').insert(scheme, 'id' )
    .then(([id]) => {
        return findByID(id)
    });
}

async function update(changes, id){
    await db('scheme')
    .where({id})
    .update(changes);

    return findByID(id);
}

async function remove(id){
    const removed = await findByID(id);

    await db('scheme')
    .where({id})
    .del();

    return removed;
}