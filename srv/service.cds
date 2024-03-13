using { db } from '../db/schema';

service crud {
    
    @odata.draft.enabled
    entity parent as projection on db.parent;
    entity child as projection on db.child;

}
