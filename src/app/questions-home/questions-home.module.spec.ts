import { QuestionsHomeModule } from './questions-home.module';

describe('QuestionsHomeModule', () => {
  let questionsHomeModule: QuestionsHomeModule;

  beforeEach(() => {
    questionsHomeModule = new QuestionsHomeModule();
  });

  it('should create an instance', () => {
    expect(questionsHomeModule).toBeTruthy();
  });
});
