import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCategory from '../../../hooks/useCategory';
import CategoryItem from '../../Shared/CategoryItem/CategoryItem';


const SubCategory = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [category] = useCategory()
    const carToy = category.filter(item => item.category === 'carToy')
    const trackToy = category.filter(item => item.category === 'trackToy')
    const policeToy = category.filter(item => item.category === 'policeToy')
    const sportsToy = category.filter(item => item.category === 'sportsToy')
    return (
        <div>
            <h2 className='text-4xl font-bold text-accent text-center mt-16'>Pick your perfect gift from category</h2>
            <Tabs className=" mt-5"  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="font-semibold text-center text-xl mb-5 text-teal-700">
                    <Tab>Car Toy</Tab>
                    <Tab>Track Toy</Tab>
                    <Tab>Police Toy</Tab>
                    <Tab>Sports Toy</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            carToy.map(item => <CategoryItem
                                key={item._id}
                                item={item}
                            ></CategoryItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            trackToy.map(item => <CategoryItem
                                key={item._id}
                                item={item}
                            ></CategoryItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-5'>
                        {
                            policeToy.map(item => <CategoryItem
                                key={item._id}
                                item={item}
                            ></CategoryItem>)
                        }
                        </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-5'>
                        {
                            sportsToy.map(item => <CategoryItem
                                key={item._id}
                                item={item}
                            ></CategoryItem>)
                        }
                        </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;