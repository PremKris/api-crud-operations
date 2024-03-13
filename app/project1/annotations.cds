using crud as service from '../../srv/service';

annotate service.parent with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'p_name',
            Value : p_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'p_age',
            Value : p_age,
        },
    ]
);
annotate service.parent with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'p_name',
                Value : p_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'p_age',
                Value : p_age,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'child',
            ID : 'child',
            Target : '@UI.FieldGroup#child',
        },
    ]
);
annotate service.parent with @(
    UI.FieldGroup #child : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : parent_to_child.c_age,
                Label : 'c_age',
            },{
                $Type : 'UI.DataField',
                Value : parent_to_child.c_name,
                Label : 'c_name',
            },{
                $Type : 'UI.DataField',
                Value : parent_to_child.id,
                Label : 'id',
            },],
    }
);
