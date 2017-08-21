export const JOBS_EXECUTIONS_1 = {
    executionId: 1,
    stepExecutionCount: 1,
    jobId: 1,
    taskExecutionId: 2,
    name: 'job1',
    startDate: '2017-08-11',
    startTime: '06:15:50',
    duration: '00:00:00',
    jobExecution: {
      id: 1,
      version: 2,
      jobParameters: {
        parameters: {
          '-spring.cloud.task.executionid': {
            identifying: false,
            value: '2',
            type: 'STRING'
          }
        },
        empty: false
      },
      jobInstance: {
        id: 1,
        version: 0,
        jobName: 'job1',
        instanceId: 1
      },
      stepExecutions: [
        {
          id: 1,
          version: 3,
          stepName: 'job1step1',
          status: 'COMPLETED',
          readCount: 0,
          writeCount: 0,
          commitCount: 1,
          rollbackCount: 0,
          readSkipCount: 0,
          processSkipCount: 0,
          writeSkipCount: 0,
          startTime: '2017-08-11T06:15:50.046Z',
          endTime: '2017-08-11T06:15:50.064Z',
          lastUpdated: '2017-08-11T06:15:50.064Z',
          executionContext: {
            dirty: false,
            empty: true,
            values: []
          },
          exitStatus: {
            exitCode: 'COMPLETED',
            exitDescription: '',
            running: false
          },
          terminateOnly: false,
          filterCount: 0,
          failureExceptions: [],
          skipCount: 0,
          summary: 'StepExecution: id=1, version=3, name=job1step1, status=COMPLETED,'
          + ' exitStatus=COMPLETED, readCount=0, filterCount=0, writeCount=0 '
          + 'readSkipCount=0, writeSkipCount=0, processSkipCount=0, commitCount=1, rollbackCount=0',
          jobParameters: {
            parameters: {
              '-spring.cloud.task.executionid': {
                identifying: false,
                value: '2',
                type: 'STRING'
              }
            },
            empty: false
          },
          jobExecutionId: 1
        }
      ],
      status: 'COMPLETED',
      startTime: '2017-08-11T06:15:50.027Z',
      createTime: '2017-08-11T06:15:49.989Z',
      endTime: '2017-08-11T06:15:50.067Z',
      lastUpdated: '2017-08-11T06:15:50.067Z',
      exitStatus: {
        exitCode: 'COMPLETED',
        exitDescription: '',
        running: false
      },
      executionContext: {
        dirty: false,
        empty: true,
        values: []
      },
      failureExceptions: [],
      jobConfigurationName: null,
      allFailureExceptions: [],
      running: false,
      stopping: false,
      jobId: 1
    },
    jobParameters: {
      '--spring.cloud.task.executionid': '2'
    },
    jobParametersString: '--spring.cloud.task.executionid=2',
    restartable: false,
    abandonable: false,
    stoppable: false,
    defined: true,
    timeZone: 'UTC',
    _links: {
      self: {
        href: 'http://localhost:9393/jobs/executions/1'
      }
    }
  };

export const JOBS_EXECUTIONS = [
  {
    executionId: 2,
    stepExecutionCount: 1,
    jobId: 2,
    taskExecutionId: 2,
    name: 'job2',
    startDate: '2017-08-11',
    startTime: '06:15:50',
    duration: '00:00:00',
    jobExecution: {
      id: 2,
      version: 2,
      jobParameters: {
        parameters: {
          '-spring.cloud.task.executionid': {
            identifying: false,
            value: '2',
            type: 'STRING'
          }
        },
        empty: false
      },
      jobInstance: {
        id: 2,
        version: null,
        jobName: 'job2',
        instanceId: 2
      },
      stepExecutions: [
        {
          id: 2,
          version: 3,
          stepName: 'job2step1',
          status: 'COMPLETED',
          readCount: 0,
          writeCount: 0,
          commitCount: 1,
          rollbackCount: 0,
          readSkipCount: 0,
          processSkipCount: 0,
          writeSkipCount: 0,
          startTime: '2017-08-11T06:15:50.103Z',
          endTime: '2017-08-11T06:15:50.136Z',
          lastUpdated: '2017-08-11T06:15:50.137Z',
          executionContext: {
            dirty: false,
            empty: true,
            values: []
          },
          exitStatus: {
            exitCode: 'COMPLETED',
            exitDescription: '',
            running: false
          },
          terminateOnly: false,
          filterCount: 0,
          failureExceptions: [],
          skipCount: 0,
          summary: 'StepExecution: id=2, version=3, name=job2step1, status=COMPLETED,'
          + ' exitStatus=COMPLETED, readCount=0, filterCount=0, writeCount=0'
          + ' readSkipCount=0, writeSkipCount=0, processSkipCount=0, commitCount=1, rollbackCount=0',
          jobParameters: {
            parameters: {
              '-spring.cloud.task.executionid': {
                identifying: false,
                value: '2',
                type: 'STRING'
              }
            },
            empty: false
          },
          jobExecutionId: 2
        }
      ],
      status: 'COMPLETED',
      startTime: '2017-08-11T06:15:50.087Z',
      createTime: '2017-08-11T06:15:50.082Z',
      endTime: '2017-08-11T06:15:50.142Z',
      lastUpdated: '2017-08-11T06:15:50.142Z',
      exitStatus: {
        exitCode: 'COMPLETED',
        exitDescription: '',
        running: false
      },
      executionContext: {
        dirty: false,
        empty: true,
        values: []
      },
      failureExceptions: [],
      jobConfigurationName: null,
      allFailureExceptions: [],
      running: false,
      stopping: false,
      jobId: 2
    },
    jobParameters: {
      '--spring.cloud.task.executionid': '2'
    },
    jobParametersString: '--spring.cloud.task.executionid=2',
    restartable: false,
    abandonable: false,
    stoppable: false,
    defined: true,
    timeZone: 'UTC',
    _links: {
      self: {
        href: 'http://localhost:9393/jobs/executions/2'
      }
    }
  },
  {
    executionId: 1,
    stepExecutionCount: 1,
    jobId: 1,
    taskExecutionId: 2,
    name: 'job1',
    startDate: '2017-08-11',
    startTime: '06:15:50',
    duration: '00:00:00',
    jobExecution: {
      id: 1,
      version: 2,
      jobParameters: {
        parameters: {
          '-spring.cloud.task.executionid': {
            identifying: false,
            value: '2',
            type: 'STRING'
          }
        },
        empty: false
      },
      jobInstance: {
        id: 1,
        version: null,
        jobName: 'job1',
        instanceId: 1
      },
      stepExecutions: [
        {
          id: 1,
          version: 3,
          stepName: 'job1step1',
          status: 'COMPLETED',
          readCount: 0,
          writeCount: 0,
          commitCount: 1,
          rollbackCount: 0,
          readSkipCount: 0,
          processSkipCount: 0,
          writeSkipCount: 0,
          startTime: '2017-08-11T06:15:50.046Z',
          endTime: '2017-08-11T06:15:50.064Z',
          lastUpdated: '2017-08-11T06:15:50.064Z',
          executionContext: {
            dirty: false,
            empty: true,
            values: []
          },
          exitStatus: {
            exitCode: 'COMPLETED',
            exitDescription: '',
            running: false
          },
          terminateOnly: false,
          filterCount: 0,
          failureExceptions: [],
          skipCount: 0,
          summary: 'StepExecution: id=1, version=3, name=job1step1, status=COMPLETED, exitStatus=COMPLETED,'
          + ' readCount=0, filterCount=0, writeCount=0 readSkipCount=0, writeSkipCount=0,'
          + ' processSkipCount=0, commitCount=1, rollbackCount=0',
          jobParameters: {
            parameters: {
              '-spring.cloud.task.executionid': {
                identifying: false,
                value: '2',
                type: 'STRING'
              }
            },
            empty: false
          },
          jobExecutionId: 1
        }
      ],
      status: 'COMPLETED',
      startTime: '2017-08-11T06:15:50.027Z',
      createTime: '2017-08-11T06:15:49.989Z',
      endTime: '2017-08-11T06:15:50.067Z',
      lastUpdated: '2017-08-11T06:15:50.067Z',
      exitStatus: {
        exitCode: 'COMPLETED',
        exitDescription: '',
        running: false
      },
      executionContext: {
        dirty: false,
        empty: true,
        values: []
      },
      failureExceptions: [],
      jobConfigurationName: null,
      allFailureExceptions: [],
      running: false,
      stopping: false,
      jobId: 1
    },
    jobParameters: {
      '--spring.cloud.task.executionid': '2'
    },
    jobParametersString: '--spring.cloud.task.executionid=2',
    restartable: false,
    abandonable: false,
    stoppable: false,
    defined: true,
    timeZone: 'UTC',
    _links: {
      self: {
        href: 'http://localhost:9393/jobs/executions/1'
      }
    }
  }
];

export const JOBS_EXECUTIONS_1_STEPS_1 = {
  jobExecutionId: 1,
  stepExecution: {
    id: 1,
    version: 3,
    stepName: 'job1step1',
    status: 'COMPLETED',
    readCount: 0,
    writeCount: 0,
    commitCount: 1,
    rollbackCount: 0,
    readSkipCount: 0,
    processSkipCount: 0,
    writeSkipCount: 0,
    startTime: '2017-08-11T06:15:50.046Z',
    endTime: '2017-08-11T06:15:50.064Z',
    lastUpdated: '2017-08-11T06:15:50.064Z',
    executionContext: {
      dirty: true,
      empty: false,
      values: [
        {
          'batch.taskletType': 'org.springframework.cloud.task.app.timestamp.batch.TimestampBatchTaskConfiguration$1'
        },
        {
          'batch.stepType': 'org.springframework.batch.core.step.tasklet.TaskletStep'
        }
      ]
    },
    exitStatus: {
      exitCode: 'COMPLETED',
      exitDescription: '',
      running: false
    },
    terminateOnly: false,
    filterCount: 0,
    failureExceptions: [],
    skipCount: 0,
    summary: 'StepExecution: id=1, version=3, name=job1step1, status=COMPLETED, exitStatus=COMPLETED,'
    + ' readCount=0, filterCount=0, writeCount=0 readSkipCount=0,'
    + ' writeSkipCount=0, processSkipCount=0, commitCount=1, rollbackCount=0',
    jobParameters: {
      parameters: {
        '-spring.cloud.task.executionid': {
          identifying: false,
          value: '2',
          type: 'STRING'
        }
      },
      empty: false
    },
    jobExecutionId: 1
  },
  stepType: 'org.springframework.cloud.task.app.timestamp.batch.TimestampBatchTaskConfiguration$1',
  _links: {
    self: {
      href: 'http://localhost:9393/jobs/executions/1/steps/1'
    }
  }
};

export const JOBS_EXECUTIONS_1_STEPS_1_PROGRESS = {
  stepExecution: {
    id: 1,
    version: 3,
    stepName: 'job1step1',
    status: 'COMPLETED',
    readCount: 0,
    writeCount: 0,
    commitCount: 1,
    rollbackCount: 0,
    readSkipCount: 0,
    processSkipCount: 0,
    writeSkipCount: 0,
    startTime: '2017-08-21T07:25:05.028Z',
    endTime: '2017-08-21T07:25:05.041Z',
    lastUpdated: '2017-08-21T07:25:05.041Z',
    executionContext: {
      dirty: true,
      empty: false,
      values: [
        {
          'batch.taskletType': 'org.springframework.cloud.task.app.timestamp.batch.TimestampBatchTaskConfiguration$1'
        },
        {
          'batch.stepType': 'org.springframework.batch.core.step.tasklet.TaskletStep'
        }
      ]
    },
    exitStatus: {
      exitCode: 'COMPLETED',
      exitDescription: '',
      running: false
    },
    terminateOnly: false,
    filterCount: 0,
    failureExceptions: [],
    skipCount: 0,
    summary: 'StepExecution: id=1, version=3, name=job1step1, status=COMPLETED, exitStatus=COMPLETED, readCount=0, '
    + 'filterCount=0, writeCount=0 readSkipCount=0, writeSkipCount=0, processSkipCount=0, commitCount=1, rollbackCount=0',
    jobExecutionId: 1,
    jobParameters: {
      parameters: {
        '-server.port': {
          identifying: false,
          value: '8981',
          type: 'STRING'
        },
        '-spring.cloud.task.executionid': {
          identifying: false,
          value: '1',
          type: 'STRING'
        },
        '-spring.jmx.default-domain': {
          identifying: false,
          value: 'timestampbatchtask-cc3dd5e9-69ca-4f91-bf2c-3361494626bd',
          type: 'STRING'
        },
        '-spring.datasource.username': {
          identifying: false,
          value: 'sa',
          type: 'STRING'
        },
        '-endpoints.jmx.unique-names': {
          identifying: false,
          value: 'true',
          type: 'STRING'
        },
        '-spring.cloud.task.name': {
          identifying: false,
          value: 'timestampbatchtask',
          type: 'STRING'
        },
        '-spring.datasource.driverClassName': {
          identifying: false,
          value: 'org.h2.Driver',
          type: 'STRING'
        },
        '-spring.datasource.url': {
          identifying: false,
          value: 'jdbc:h2:tcp://localhost:19092/mem:dataflow',
          type: 'STRING'
        },
        '-endpoints.shutdown.enabled': {
          identifying: false,
          value: 'true',
          type: 'STRING'
        }
      },
      empty: false
    }
  },
  stepExecutionHistory: {
    stepName: 'job1step1',
    count: 1,
    commitCount: {
      count: 1,
      min: 1,
      max: 1,
      standardDeviation: 0,
      mean: 1
    },
    rollbackCount: {
      count: 1,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    },
    readCount: {
      count: 1,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    },
    writeCount: {
      count: 1,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    },
    filterCount: {
      count: 1,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    },
    readSkipCount: {
      count: 1,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    },
    writeSkipCount: {
      count: 1,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    },
    processSkipCount: {
      count: 1,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    },
    duration: {
      count: 1,
      min: 13,
      max: 13,
      standardDeviation: 0,
      mean: 13
    },
    durationPerRead: {
      count: 0,
      min: 0,
      max: 0,
      standardDeviation: 0,
      mean: 0
    }
  },
  percentageComplete: 1,
  finished: true,
  duration: 13,
  _links: {
    self: {
      href: 'http://localhost:9393/jobs/executions/1/steps/1'
    }
  }
};
