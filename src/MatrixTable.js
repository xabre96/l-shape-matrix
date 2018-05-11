import React, { Component } from 'react';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';

class MatrixTable extends Component {
    renderTableHead = (variables) => {
        return {
            cells: [
                {
                    key: "",
                    content: "",
                },
                ...variables.map((variable) => {
                    return { key: variable.key, content: variable.name };
                }),
            ],
        };
    }

    renderTableRows = (criteria) => {
        const { variables } = this.props;

        return criteria.map((criterion) => {
            return {
                key: `row-${criterion.key}`,
                cells: [
                    {
                        content:(
                            <div>
                                {criterion.criteria}
                            </div>
                        )
                    },
                    ...variables.map((variable) => {
                      const requirement = variable.requirements.filter((requirement) => {
                          return requirement.key === criterion.key;
                      });

                      return {
                          content: (
                              <div>{requirement[0].requirement }</div>
                          )
                      }; 
                    })
                ],
            };
        });
    }

    render() {
        const { criteria, variables } = this.props;

        return (
            <DynamicTableStateless
                head={this.renderTableHead(variables)}
                rows={this.renderTableRows(criteria)}
            />
        );
    }
}

export default MatrixTable;
