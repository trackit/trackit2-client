import React from 'react';
import { ElasticSearchComponent } from '../ElasticSearchComponent';
import { shallow } from 'enzyme';
import ReactTable from 'react-table';
import Moment from 'moment';
import Misc from '../../../misc';

const Collapsible = Misc.Collapsible;

const props = {
  getData: jest.fn(),
  clear: jest.fn(),
  dates: {
    startDate: Moment().startOf("months"),
    endDate: Moment().endOf("months")
  }
};

const propsWithData = {
  ...props,
  data: {
    status: true,
    value: [
      {
        account: '420',
        reportDate: Moment().toISOString(),
        domain: {
          domainId: 'id',
          domainName: 'name',
          region: 'us-west-1',
          costs: {
            instance: 42
          },
          stats: {
            cpu: {
              average: 42,
              peak: 42
            },
            JVMMemoryPressure: {
              average: 42,
              peak: 42
            },
            freeSpace: 42
          },
          totalStorageSpace: 42,
          instanceType: 'type',
          instanceCount: 42,
          tags: {
            key: "value"
          }
        }
      }
    ]
  }
};

describe('<ElasticSearchComponent />', () => {

  it('renders a <ElasticSearchComponent /> component', () => {
    const wrapper = shallow(<ElasticSearchComponent {...propsWithData}/>);
    expect(wrapper.length).toBe(1);
  });

  it('renders a <Collapsible /> component', () => {
    const wrapper = shallow(<ElasticSearchComponent {...propsWithData}/>);
    const collapsible = wrapper.find(Collapsible);
    expect(collapsible.length).toBe(1);
  });

  it('renders a <ReactTable /> component', () => {
    const wrapper = shallow(<ElasticSearchComponent {...propsWithData}/>);
    const table = wrapper.find(ReactTable);
    expect(table.length).toBe(1);
  });

});
