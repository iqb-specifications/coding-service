from pydantic import BaseModel, StrictStr
from typing import Optional

from src.models import TaskInstructions
from .task_type import TaskType

class TaskUpdate(BaseModel):
    label: Optional[StrictStr] = None
    type: Optional[TaskType] = None
    instructions: Optional[TaskInstructions | str] = None
