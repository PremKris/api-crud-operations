namespace db;

entity parent{
    key id : Integer;
    p_name : String;
    p_age : String;
    parent_to_child : Composition of many child on parent_to_child.id = id; 
}


entity child{
    key id : String;
    c_name : String;
    c_age : String;
    id_field : Association to one parent;
}



