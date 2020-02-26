import React from 'react';

import TeamWorklog from '../../components/Worklog/worklog';
import Layout from '../../components/layout';

const Worklog = ({ location }) => (
    <Layout location={location}>
        <div className="container-fluid">
            <section className="worklog">
                <TeamWorklog />
            </section>
        </div> 
    </Layout>  
);

export default Worklog;