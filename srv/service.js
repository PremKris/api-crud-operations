const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () 
{
    let {
        parent,
        child
    } = this.entities;

    const connection = await cds.connect.to('iflow');

    this.before('READ', parent, async (req) => 
    {
        try
        {
            const content = await connection.get('/odata/v4/service1/school');
            const entry = [];
            content.value.forEach(async (entity) => 
            {
                var id = entity.admissionid;
                var branch = entity.schhol_branch_code;
                //hardcoing index number.
                // var id = content.value[0].admissionid;//Extracts id from the entity i.e the first element.
                // var branch = content.value[0].schhol_branch_code;
                entry.push
                ({
                    //The newly created object(id and chartDimension) is pushed into the EMPTY array.
                    id:id,
                    p_name:branch,
                    p_age:"78"
                });
            
            })
            await INSERT.into(parent).entries(entry);
            
        } 
        catch (error) 
        {
            console.error("Could not read data from api", error);
        }
    });
    this.on('CREATE', parent, async (req,next) => 
    {
        debugger
        try 
        {
            const data = req.data;
            let txt = "798205486e954fa880a0b366e6725f90";//For uuid which was a primary key
            let sample = txt.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/,"$1-$2-$3-$4-$5");
            const content_for_create = 
            {
                school_id: data.id,
                admissionid: sample,
                school_name: data.p_name,
                "IsActiveEntity" : true
            }; 
            await connection.post('/odata/v4/service1/school', content_for_create );
            return next();
        } 
        catch (error) 
        {
            
            console.error('Error during CREATE operation on Parent entity:', error);
            req.error(500, 'Internal Server Error');
        }
    });

    this.on('DELETE', parent, async (req) => 
    {
        debugger
        try 
        {
            const data = req.data;
            // const content_for_create = 
            // {
            //     school_id: data.id,
            //     admissionid: sample,
            //     school_name: data.p_name,
            //     "IsActiveEntity" : true
            // }; 
            // await connection.post('/odata/v4/service1/school', content_for_create );
        } 
        catch (error) 
        {
            
            console.error('Error during CREATE operation on Parent entity:', error);
            req.error(500, 'Internal Server Error');
        }
    });
});