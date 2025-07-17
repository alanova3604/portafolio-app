import { createClient } from 'contentful';

const client = createClient({
    space: 'jgm7n3begowb', // Tu Space ID
    accessToken: 'XpDJBDjBzL4-8jWGAe2QXj4kS1wvWWbRrU_QbNI8HNc',
});

const fetchProjects = () => {
    return client.getEntries({ content_type: 'proyectos-alan' })
        .then(response => {
            return response.items;
        })
        .catch(error => {
            console.error('Error fetching data', error);
            return [];
        });
};

export default fetchProjects;